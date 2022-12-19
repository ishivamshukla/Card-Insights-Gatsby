import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import CardInsight from "../components/Card"
import Grid from "./grid"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <Grid />
    <CardInsight />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => {

  return <>
  <title>Insights card</title>

  <meta name={"description"} 
  content={"This is Card "} />

  </>
}
