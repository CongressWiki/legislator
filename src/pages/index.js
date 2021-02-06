import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1>Amazing Pandas Eating Things</h1>
        <h4>{data.hasura.bills_aggregate.aggregate.count} Bills</h4>
        {data.hasura.bills_aggregate.nodes.map(bill => (
          <div key={bill.id}>
            <Link to={bill.id}>
              <h3>
                {bill.id}{" "}
                <span>— {new Date(bill.status_at).toDateString()}</span>
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BillAggregateQuery {
    hasura {
      bills_aggregate(limit: 3) {
        nodes {
          id
          title
          status_at
        }
        aggregate {
          count
        }
      }
    }
  }
`
