import Entry from "@/app/types/entry"

const renderWorkshopPreview = (w: Entry) => {
    return (
        <>
        <div>{w.title}</div>
        <div>{w.slug}</div>
        <div>{w.date}</div>
        <div>{w.description}</div>
        <div>{w.coverImage}</div>
        <div>{w.location}</div>
        <div>{w.content}</div>
        </>
    );
};

export default renderWorkshopPreview;