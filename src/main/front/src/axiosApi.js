import axios from 'axios';

// axios 인스턴스 생성
const axiosApi = axios.create({
  baseURL: '/react', // 프록시 설정과 동일한 경로
  withCredentials: true // CORS 요청 시 쿠키를 전송하기 위해 필요한 옵션
});

// CSRF 토큰을 가져오는 함수
const getCsrfToken = async () => {
  try {
    const response = await axios.get('/react/csrf-token'); // 백엔드와의 통신을 통해 CSRF 토큰을 받아옴
    return response.data; // 받아온 CSRF 토큰 반환
  } catch (error) {
    console.error('Failed to retrieve CSRF token:', error);
    return null;
  }
};

// 모든 요청에 CSRF 토큰을 추가하는 인터셉터
axiosApi.interceptors.request.use(async (config) => {
  const csrfToken = await getCsrfToken(); // 백엔드로부터 CSRF 토큰을 받아옴
  if (csrfToken) {
    config.headers['X-CSRF-TOKEN'] = csrfToken; // 헤더에 CSRF 토큰 추가
  }
  return config;
});

export default axiosApi;