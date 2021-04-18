import http from '../../utils/http'

function login (username,useravatar) {
  return http.post('/user/userlist', {
    username,
    useravatar
  })
}

export default {
  login
}
