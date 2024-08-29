import HoverButtonWithHoc from "./component/hoc/button-hover";
import ClickButtonWithHoc from "./component/hoc/button-click";






const LearningHoc = ()=>{
    return(
        <>
        <h1>this is my hoc </h1>
<ClickButtonWithHoc/>
<HoverButtonWithHoc/>


        
        </>
        
    )
};

export default LearningHoc;