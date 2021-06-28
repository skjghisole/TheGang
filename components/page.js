import Link from 'next/link'
const Page = ({ children, scrollable }) => {
    return (
        <>
            <div className="container">
                <div className="backBtn">
                    <Link href="/">
                        <a>
                            &larr;
                        </a>
                    </Link>
                </div>
                <div className={`child ${scrollable && 'scrollable'}`}>
                    {children}
                </div>
            </div>
            <style jsx>{`
                a {
                    text-decoration: none;
                }
                
                .backBtn {
                    padding: 0 5rem;
                    position: absolute;
                    font-size: 3em;
                    left: 0;
                    top: 0;
                }

                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .scrollable {
                    overflow-x: scroll;
                }

                @media (max-width: 600px) {
                    .backBtn {
                        padding: 0em 0.2em;
                    }
                    .child {
                        flex: 5;
                    }
                }
            `
            }
            </style>
        </>
    )
}

export default Page