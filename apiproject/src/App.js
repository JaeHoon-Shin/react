import './App.css';
import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
function App() {


  const [pharmacy, setPharmacy] = useState(null);
  const [hospital, setHospital1] = useState(null);
  const [animal, setAnimal] = useState(null);
  const [animalImg, setAnimalImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setPharmacy(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      // 동물 약국 데이터
      const response1 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020302/1/1000/');
      const response2 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020302/1001/2000/');
      const response3 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020302/2001/3000/');
      const response4 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020302/3001/4000/');
      const response = response1.data.LOCALDATA_020302.row.filter((obj) => obj.DTLSTATENM == '정상').concat(response2.data.LOCALDATA_020302.row.filter((obj) => obj.DTLSTATENM == '정상'), response3.data.LOCALDATA_020302.row.filter((obj) => obj.DTLSTATENM == '정상'), response4.data.LOCALDATA_020302.row.filter((obj) => obj.DTLSTATENM == '정상'));
      setPharmacy(response); // 데이터는 response.data 안에 들어있습니다.

      //동물 병원 데이터
      const hospital1 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020301/1/1000/')
      const hospital2 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020301/1001/2000/')
      const hospital3 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020301/2001/3000/')

      setHospital1(hospital1.data.LOCALDATA_020301.row.filter((obj) => obj.DTLSTATENM == '정상').concat(hospital2.data.LOCALDATA_020301.row.filter((obj) => obj.DTLSTATENM == '정상'), hospital3.data.LOCALDATA_020301.row.filter((obj) => obj.DTLSTATENM == '정상')))

      //입양 대기 동물 데이터
      const animal1 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/TbAdpWaitAnimalView/1/100/')
      setAnimal(animal1.data.TbAdpWaitAnimalView.row)

      const animalImg1 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/TbAdpWaitAnimalPhotoView/1/10/')
      setAnimalImg(animalImg1.data.TbAdpWaitAnimalPhotoView.row)
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  animal && animal.map((n, key) => {
    if (n.SPCS == 'DOG') {
      animalImg && animalImg.map((im, i) => {
        if (n.ANIMAL_NO == im.ANIMAL_NO) {
          console.log( im.PHOTO_URL)
        }
      })
    }
  })
  console.log(animalImg);
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!pharmacy) return null;
  return (
    <>
      <button onClick={fetchUsers}>다시 불러오기</button>
      {

        animal && animal.map((n, key) => {
          if (n.SPCS == 'DOG') {
            animalImg && animalImg.map((im, i) => {
              if (n.ANIMAL_NO == im.ANIMAL_NO) {
                
                return <img key={key} src={`${im.PHOTO_URL}`}></img>
              }
            })
          }
        })
      }
    </>
  );
}

export default App;
