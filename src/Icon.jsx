const Icon = (props) => {
    const { arrow } = props;
    return (
        <img src = {arrow ? "https://cdn-icons-png.flaticon.com/128/32/32195.png" : "https://cdn-icons-png.flaticon.com/128/271/271239.png" } width="18px" alt="downarrow" />
    )
}

export default Icon;