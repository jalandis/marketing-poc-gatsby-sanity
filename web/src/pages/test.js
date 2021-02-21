import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import TestPreviewList from "../components/test-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
query TestQuery {
  site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
    title
  }
  postgres {
    allImpactUsers {
      edges {
        node {
          email
          id
        }
      }
    }
  }
}
`;

const TestPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const testNodes = (data || {}).postgres.allImpactUsers
    ? mapEdgesToNodes(data.postgres.allImpactUsers)
    : [];

  if (!site) {
    console.warn(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout textWhite={false}>
      <SEO title={site.title || 'Missing title'} description={site.description || 'Missing description'} keywords={site.keywords || []} />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
        <div className="py-6">{testNodes && <TestPreviewList nodes={testNodes} />}</div>
      </Container>
    </Layout>
  );
};

export default TestPage;
