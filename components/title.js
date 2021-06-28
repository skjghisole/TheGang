const Title = ({ children, title }) => {
    
    return <div>
        <h1 className="title">
            {title}
        </h1>
        {children}
        <style jsx>{`
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          margin-top: 1em;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }
      `}</style>

    </div>
}

export default Title