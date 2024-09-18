import Entry from "@/app/types/entry"

const renderEventPreview = (e: Entry) => {
    return (
        <>
        <div>{e.title}</div>
        <div>{e.slug}</div>
        <div>{e.date}</div>
        <div>{e.description}</div>
        <div>{e.coverImage}</div>
        <div>{e.location}</div>
        <div>{e.content}</div>
        </>
    );
};

export default renderEventPreview;
  