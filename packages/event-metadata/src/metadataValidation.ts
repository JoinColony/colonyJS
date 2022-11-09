import * as yup from 'yup';
import { defineMessages } from 'react-intl';

import { MetadataType } from './types';

const MSG = defineMessages({
  requiredField: {
    id: `utils.eventMetadata.requiredField`,
    defaultMessage: `This field is required.`,
  },
});

const miscMetadataSchema = yup.object({
  name: yup.string().required(() => MSG.requiredField),
  value: yup.string().required(() => MSG.requiredField),
});

const safeMetadataSchema = yup.object({
  chainId: yup.string(),
  contractAddress: yup.string(),
  moduleContractAddress: yup.string(),
  safeName: yup.string(),
});

const colonyMetadataSchema = yup.object({
  colonyName: yup.string(),
  colonyDisplayName: yup.string(),
  colonyAvatarHash: yup.string().nullable(),
  colonyTokens: yup.array().of(yup.string()),
  verifiedAddresses: yup.array().of(yup.string()),
  isWhitelistActivated: yup.boolean(),
  colonySafes: yup.array().of(safeMetadataSchema),
});

const domainMetadataSchema = yup.object({
  domainName: yup.string(),
  domainColor: yup.number(),
  domainPurpose: yup.string(),
});

const decisionMetadataSchema = yup.object({
  title: yup.string(),
  description: yup.string(),
  motionDomainId: yup.number(),
});

const annotationMetadataSchema = yup.object({
  annotationMsg: yup.string().required(() => MSG.requiredField),
});

export const metadataSchema = yup.object().shape({
  version: yup.number().required(() => MSG.requiredField),
  name: yup.mixed<MetadataType>().oneOf(Object.values(MetadataType)).required(),
  data: yup
    .object()
    .required(() => MSG.requiredField)
    .when('name', {
      is: MetadataType.Colony,
      then: colonyMetadataSchema.required(() => MSG.requiredField),
    })
    .when('name', {
      is: MetadataType.Domain,
      then: domainMetadataSchema.required(() => MSG.requiredField),
    })
    .when('name', {
      is: MetadataType.Decision,
      then: decisionMetadataSchema.required(() => MSG.requiredField),
    })
    .when('name', {
      is: MetadataType.Annotation,
      then: annotationMetadataSchema.required(() => MSG.requiredField),
    })
    .when('name', {
      is: MetadataType.Misc,
      then: miscMetadataSchema.required(() => MSG.requiredField),
    }),
});
