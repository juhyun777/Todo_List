// 유저는 할일을 추가할 수 있다.
// 각 할일에 삭제와 체크버튼이 있다.
// 삭제버튼을 클릭하면 할일이 리스트에서 삭제된다

// 1. 누르면 부모 노드가 삭제된다

// 먼저, task 클래스를 선택! .task 를 통해 클래스 선택 확인!
// 선택한 클래스를 복제!
// querySelector 로 뭐가 선택되는 지 보자!

// 복제된 항목에 개별적인 값을 줘야하지 않을까?



// 체크버튼을 누르면 할일이 끝난것으로 간주하고 밑줄이간다.
// 끝난 할일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
// 모바일 버전에서도 확인할 수 있는 반응형 웹이다


let inputButton = document.getElementById("input-button")
let inputText = document.getElementById("input-text")
let taskList = document.getElementById("task-list")
let task = document.querySelector(".task")
let cloneList = document.getElementById("clone-list")
let deleteButton = document.querySelector(".delete-button")
let b = 0



deleteButton.addEventListener("click", deleteItem)
inputButton.addEventListener("click", addItem)

function addItem(){
    
    let cloneTask = task.cloneNode(true)
    
    cloneTask.childNodes[0].textContent = `task ${b}`
    cloneList.append(cloneTask)
    let cloneDelete = cloneTask.querySelector(".delete-button")
    cloneDelete.addEventListener("click", function() {
        cloneDelete.parentNode.parentNode.remove()
    })
    b++
}

function deleteItem(){
    //deleteButton.parentNode.parentNode.remove()
    console.log(deleteButton)
}


// 24.11.04 : 내일은 원본 task 를 숨기는 것과 input 을 받아 할 일 정하기!


