
export default ({ children, scrollable }) => <>
    <div className={`grid ${scrollable && 'scrollable'}`}>
        {children}
    </div>
    <style jsx>
        {`     
            .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;

                max-width: 800px;
                margin-top: 3rem;
            }

            .scrollable {
                overflow-x: scroll;
            }
        `}
    </style>
</>