const Icon = (props) => {
    const { arrow } = props;
    return (
        // The image src changes conditionally to show Up/Down arrow image icon beside the dropdown title
        <img src = {arrow ? "https://cdn-icons-png.flaticon.com/128/32/32195.png" : "https://cdn-icons-png.flaticon.com/128/271/271239.png" } width="18px" alt="downarrow" />
    )
}

export default Icon;