import HighOrderComponentForButton from "./high-hover-comp"

const ButtionHoverCountComp = ({count,increaseCount})=>{
    return(<>
<button onMouseEnter={increaseCount}>Hover me-{count}</button>
   </>
   );
};

export default  HighOrderComponentForButton(ButtionHoverCountComp);