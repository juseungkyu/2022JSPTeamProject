// 각 변의 충돌 판정을 비교하여 충돌 했는지 안 했는지 확인

function circleToCricleCollisionCheck(spA, spB){
    
} 

// 피타고라스 정리로 거리 구하기
function getDistance(spA, spB){
    return Math.sqrt(Math.pow(Math.abs(spA.x - spB.x)) + Math.pow(Math.abs(spA.y - spB.y)))
}

// x축 힘, y축 힘을 계산하여 진짜 힘(속도)를 계산함
function getForce(speedX, speedY){
    return Math.sqrt(Math.pow(Math.abs(speedX)) + Math.pow(Math.abs(speedY)))
}