export default function Tags({ tags }) {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <span className="tag" key={index}>
                    {tag}
                </span>
            ))}
        </div>
    );
}