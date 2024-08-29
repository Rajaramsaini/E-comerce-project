import HighOrderComponentForButton from "./high-hover-comp"

const ButtionClickCountComp = ({count,increaseCount})=>{
   

    return<>


    <button onClick={increaseCount}>click me-{count}</button>
    </>
}

export default  HighOrderComponentForButton(ButtionClickCountComp);