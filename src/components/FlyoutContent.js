import React from "react";

const FlyoutContent = ({ content, hideContent }) => {
  return (
    <div
      className={
        "flyout-content-background " + (content ? "active" : "disabled")
      }
      onClick={() => hideContent()}
    >
      <div className={"flyout-content"} onClick={e => e.stopPropagation()}>
        {content && (
          <>
            <h2>{content.objects[0].locale.en.label}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: content.objects[0].locale.en.description
              }}
            />
            <button className="btn-continue" onClick={() => hideContent()}>
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FlyoutContent;
