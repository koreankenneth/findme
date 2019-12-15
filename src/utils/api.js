import { dummyFindMeList, dummyFindMePost, dummySession, brands } from './_backend'
import { _loadFindMeList, _getFindMePost } from './_dataFactory'

const isDevMode = false
const backendIPAddress = '13.125.197.91'

async function _getBackendData(uri) {
  try {
    const url = `http://${backendIPAddress}/${uri}`
    let response = await fetch(
      url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    return await response.json()
  } catch (error) {
    console.error('[Error Message] ', error)
    return error
  }
}


export async function loadFindMeList(filter) {
  return isDevMode ? dummyFindMeList : await _loadFindMeList(await _getBackendData('findmeAll?page=0'))
}

export async function getFindMePost(id) {
  return isDevMode ? dummyFindMePost(id) : await _getFindMePost(await _getBackendData(`findme/${id}`))
}

export async function getSession(id) {
  return isDevMode ? dummySession : dummySession
}

export async function saveComment(id, comment) {
  return isDevMode ? 1 : 1
}

export async function loadBrands() {
  return brands
}

export async function saveFindMePost(post) {
  const _images = post.images.map((image) => {
    return {
      'link': image,
      'isMain': false
    }
  })

  const body = JSON.stringify({
    'exposureType': post.displayType,
    'title': 'testTitle',
    'content': post.text,
    'product': {
      'productColor': post.color,
      'productType': post.category,
      'productBrand': post.brand,
      'productSize': post.size,
      'productGender': post.gender,
    },
    'images': _images,
  })

  try {
    let response = await fetch(
      'http://13.125.197.91/findme', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    })
    let responseJson = await response.json()

    return responseJson
  } catch (error) {
    console.error(error)
  }
}