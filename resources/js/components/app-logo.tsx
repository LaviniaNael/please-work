import myLogo from '../assets/my-logo.png';

export default function AppLogo() {
    return (
        <>
            <img src={myLogo} alt="ProCode Logo" className="size-8/12" />
        </>
    );
}
