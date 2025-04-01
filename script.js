function getRandomMessage() {
    fetch("https://aagami.github.io/lucky-draw-test/")  // 백엔드 API 호출
        .then(response => response.text())  // 응답 데이터를 텍스트로 변환
        .then(data => {
            document.getElementById("message").textContent = data;  // 화면에 메시지 표시
        })
        .catch(error => {
            console.error("Error fetching message:", error);
            document.getElementById("message").textContent = "❌ 오류 발생! 다시 시도해 주세요.";
        });
}