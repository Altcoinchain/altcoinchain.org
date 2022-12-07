import NextProgress from 'next-progress';

const NextProgressBar = () => {
    return (
        <NextProgress
            color={'#730978'}
            delay={250}
            height="0.25rem"
            options={{ showSpinner: false }}
        />
    );
};

export default NextProgressBar;
