import React from 'react'

export const EventSchemaScript = ({event}) => {
    const eventName = encodeURIComponent(event?.name);
    const formattedDate = {
      "@context": "https://schema.org",
      "@type": "EducationEvent",
      "name": eventName,
      "startDate": new Date(),
      "endDate": new Date(),
      "description": event?.details,
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Snickerpark Stadium",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "100 West Snickerpark Dr",
          "addressLocality": "Snickertown",
          "postalCode": "19019",
          "addressRegion": "PA",
          "addressCountry": "US"
        }
      },
    }
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(formattedDate)}}
    />
    </>
  )
}
