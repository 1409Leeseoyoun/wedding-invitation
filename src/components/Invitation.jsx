function Invitation() {
  const handleClick = () => {
    alert("축하해 줘서 고마워~~");
  }

  return (
    <div>
      <h2>초대합니다</h2>
      <p>
        서로 다른 길을 걸어온 저희가<p/>
        이제 같은 길을 걸어가려 합니다.<p/>
        소중한 분들 모시고 뜻깊은 날을 함께 하고 싶습니다.<p/>
        오셔서 축복해주시면 감사하겠습니다.<p/>
      </p>
      <div>
        <p>신부 <strong>이서윤</strong></p>
        <p>신랑 <strong>ㅇㅇㅇ</strong></p>
      </div>
      <button onClick={handleClick}>축하하기</button>
    </div>
  )
}

export default Invitation;