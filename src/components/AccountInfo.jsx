import useCopyClipboard from "../hooks/useCopyClipboard";

function AccountInfo() {
  const groomCopy = useCopyClipboard();
  const brideCopy = useCopyClipboard();

  const groomAccount = {
    name: "이서윤",
    bank: "토스뱅크",
    number: "1908 6556 9160",
  };

  const brideAccount = {
    name: "이서윤",
    bank: "카카오뱅크",
    number: "7777 154 2819",
  };

  return (
    <section>
      <h2>마음 전하실 곳</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <p>
          <strong>신랑 {groomAccount.name}</strong>
        </p>
        <p>
          {groomAccount.bank} {groomAccount.number}
        </p>
        <button onClick={() => groomCopy.copy(groomAccount.number)}>
          복사하기
        </button>
        {groomCopy.copied && (
          <p style={{ color: "green" }}>계좌번호가 복사되었습니다.</p>
        )}
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <p>
          <strong>신부 {brideAccount.name}</strong>
        </p>
        <p>
          {brideAccount.bank} {brideAccount.number}
        </p>
        <button onClick={() => brideCopy.copy(brideAccount.number)}>복사하기</button>
        {brideCopy.copied && (
          <p style={{ color: "green" }}>계좌번호가 복사되었습니다.</p>
        )}
      </div>
    </section>
  );
}

export default AccountInfo;
