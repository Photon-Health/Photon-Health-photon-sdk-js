import { gql } from "@apollo/client"

export const ORGANIZATION_FIELDS = gql`
  fragment OrganizationFields on Organization {
    id
    name
  }
`

export const PATIENT_FIELDS = gql`
  fragment PatientFields on Patient {
    id
    externalId
    name {
      full
    }
    dateOfBirth
    sex
    gender
    email
    phone
  }
`

export const CATALOG_FIELDS = gql`
  fragment CatalogFields on Catalog {
    id
    name
  }
`

export const MEDICATION_FIELDS = gql`
  fragment MedicationFields on Medication {
    id
    name
  }
`

export const CATALOG_MEDICATION_FIELDS = gql`
  fragment CatalogMedicationFields on Catalog {
    treatments {
      id
      name
    }
  }
`

export const PRESCRIPTION_FIELDS = gql`
  ${MEDICATION_FIELDS}
  fragment PrescriptionFields on Prescription {
    id
    externalId
    prescriber {
      id
      name {
        full
      }
    }
    patient {
      id
      name {
        full
      }
    }
    state
    medication {
      ...MedicationFields
    }
    dispenseAsWritten
    dispenseQuantity
    dispenseUnit
    refillsAllowed
    refillsRemaining
    daysSupply
    instructions
    notes
    effectiveDate
    expirationDate
    writtenAt
  }
`

export const FILL_FIELDS = gql`
  fragment FillFields on Fill {
    id
    treatment {
      name
    }
    state
    requestedAt
    filledAt
  }
`

export const ORDER_FIELDS = gql`
  ${PATIENT_FIELDS}
  ${FILL_FIELDS}
  fragment OrderFields on Order {
    id
    externalId
    state
    fills {
      ...FillFields
    }
    patient {
      ...PatientFields
    }
    pharmacy {
      id
      name
    }
    createdAt
  }
`

export const WEBHOOK_CONFIG_FIELDS = gql`
  fragment WebhookFields on WebhookConfig {
    id
    name
    filters
    url
  }
`

export const CLIENT_FIELDS = gql`
  fragment ClientFields on Client {
    id
    name
    secret
    appType
  }
`

export const PHARMACY_FIELDS = gql`
   fragment PharmacyFields on Organization {
     id
     name
     address {
       city
       country
       postalCode
       state
       street1
       street2
     }
   }
 `