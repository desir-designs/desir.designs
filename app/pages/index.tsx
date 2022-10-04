import CommentsRow from "@components/CommentsRow"
import ContactForm from "@components/ContactForm"
import ContentRow from "@components/ContentRow"
import Hero from "@components/Hero"
import StatsSection from '@components/StatsSection'
import SummarySection from "@components/SummarySection"
import TagCloud from "@components/TagCloud"

import PageLayout from '@layouts/PageLayout'
import PageService from '@services/page'
import { useEffect } from "react"

const HomePage = ({ page }) => {

  const { layout, data: { contactForm, hero, contentRow } } = page

  useEffect(() => {
    console.log(`[DesirDesigns@${page.version}]`, page)
  }, [page])



  return (
    <PageLayout {...layout}>
      <Hero {...hero} />
      <TagCloud />
      <ContentRow {...contentRow} />
      <StatsSection />
      <SummarySection />
      <CommentsRow />
      <ContactForm {...contactForm} />
    </PageLayout>

  )
}

export default HomePage


export async function getServerSideProps() {

  const { getPage } = PageService

  const page = await getPage("home")

  return {
    props: {
      page
    }
  }

}