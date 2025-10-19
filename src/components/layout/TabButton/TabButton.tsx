

type TabButtonProps = {
    children: React.ReactNode;
    onSelect: () => void;
};

export default function TabButton(props: TabButtonProps) {

    return (
        <li><button onClick={props.onSelect}>{props.children}</button></li>
    )
}
