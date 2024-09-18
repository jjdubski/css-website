import Entry from "@/app/types/entry"

const renderProjectPreview = (p: Entry) => {
    return (
        <>
        <div>{p.title}</div>
        <div>{p.slug}</div>
        <div>{p.date}</div>
        <div>{p.description}</div>
        <div>{p.coverImage}</div>
        <div>{p.location}</div>
        <div>{p.content}</div>
        </>
    );
};

export default renderProjectPreview;