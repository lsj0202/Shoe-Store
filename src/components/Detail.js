/* eslint-disable */
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../App.css'

function Detail(props) {
  let navigate = useNavigate();
  
  let {id} = useParams();
  console.log(id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id) + 1) + '.jpg'} width="100%"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-danger" onClick={() => { navigate(-1)}}>뒤로가기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;