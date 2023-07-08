import React from "react";

// note : props for border, background, and text must be 200, 600 ,and 50 for tailwind
// border : 200
// text : 600
// bg : 50

function LabelColor(props) {
  const { styles } = props;
  return (
    <div className={`w-fit ${styles.bg} rounded border ${styles.border}`}>
      <span
        className={`px-2 pb-[0.12rem] text-xs font-nunito inline-block ${styles.text} `}
      >
        {props.title}
      </span>
    </div>
  );
}

export default LabelColor;
