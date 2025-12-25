// Exercise #3: Find a Minimum Score
let studentScores = [100, 20, 3, 1000];
let minScore = studentScores[0]
// Start coding here
 for(let score of studentScores){
    if(score < minScore){
        minScore = score ;
    }

 }


console.log(minScore);




// // สมมุติว่าเรามี Variable ตั้งต้น studentScores ซึ่งบรรจุคะแนนสอบของนักเรียนในห้อง ดังนี้ [100, 20, 3, 100]
// ให้เขียนโปรแกรมในการหาคะแนนสอบที่น้อยที่สุดของนักเรียนในห้อง
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้
