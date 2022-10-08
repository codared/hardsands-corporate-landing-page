import WithLayout from 'components/WithLayout'
import ReturnPolicyPage from 'modules/legal/ReturnPolicyPage'
import React from 'react'
import { useTranslation } from 'react-i18next'


function PrivacyPolicy() {
  const { t } = useTranslation()

  return (
    <WithLayout
      pageTitle={t('common:return-policy', 'Return Policy - Hardsands')}
      pageDescription={t(
        'meta:return-policy.desc',
        'Hardsand\'s return policy includes everything you should know about how we process returns for your Business card products. Get in touch to learn more.'
      )}
    >
      <ReturnPolicyPage />
    </WithLayout>
  )
}

export default PrivacyPolicy;
