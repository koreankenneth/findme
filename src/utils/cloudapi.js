
import { RNS3 } from 'react-native-s3-upload'

const ACCESS_KEY = 'AKIAXCP73CTSVTBGI6DU'
const SECRET_KEY = '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'
const BUCKET = 'fmresourcebk'
const REGION = 'ap-northeast-2'
const SUCCESS_ACTION_STATUS = 201

export async function uploadImage(uri, name) {
  const file = {
    uri,
    name,
    type: "image/png"
  }
  const options = {
    keyPrefix: "images/",
    bucket: BUCKET,
    region: REGION,
    accessKey: ACCESS_KEY,
    secretKey: SECRET_KEY,
    successActionStatus: SUCCESS_ACTION_STATUS
  }
  let result = {
    isOK: false,
    url: '',
  }
  
  await RNS3.put(file, options).then(response => {
    if (response.status == SUCCESS_ACTION_STATUS)
      result = {
        isOK: true,
        url: response.body.postResponse.location,
      }
  })

  return result
}