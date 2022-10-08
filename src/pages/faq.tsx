import WithLayout from 'components/WithLayout';
import React from 'react'
import { useTranslation } from 'react-i18next';

import FaqPage from 'modules/faq/FaqPage'

function FAQPage() {
  const { t } = useTranslation()
  return (
    <WithLayout
      pageTitle={t('meta:faq.title', "Frequently Asked Questions")}
      pageDescription={t('meta:faq.desc', "Have questions about Hardsands? We've got answers for you. Explore Frequently Asked Questions and learn how to use your hardsands card for better networking experience.")}
      image_url="https://cdn.shopify.com/s/files/1/0559/0407/5843/files/12_1.jpg?v=1665057392"
    >
      <FaqPage />
    </WithLayout>
  )
}

export default FAQPage
