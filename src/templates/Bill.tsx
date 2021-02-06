import React from "react"
import Layout from "../components/Layout"
import type { Bill as BillData } from "../types/hasura"

export type BillProps = {
  pageContext: BillData
}

const SummaryParagraphs = (summary: string) => {
  // Remove citations I.e. (2)
  summary = summary.replace(/\([\d]*\)/g, "")
  // Add Ellipsis to paragraphs that end in "to" | "include"
  summary = summary.replace(/to\n/g, "to...")
  summary = summary.replace(/include\n/g, "include...")

  return summary.split("\n").map((paragraph, index) => {
    return (
      <p
        key={`summary-paragraph-${index}`}
        style={{ fontSize: "21px", lineHeight: "32px" }}
      >
        {paragraph}
      </p>
    )
  })
}

export default function Bill({ pageContext: bill }: BillProps) {
  return (
    <Layout>
      <h2>
        {bill.type.toUpperCase()} - {bill.number}
      </h2>
      <h4>{bill.subject}</h4>
      <h3>{bill.title}</h3>
      {SummaryParagraphs(bill.summary)}
    </Layout>
  )
}
