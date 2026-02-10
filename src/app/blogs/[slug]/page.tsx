import BlogDetailsContent from "./blog-details";




export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    return (
        <div className="pt-20">
            <BlogDetailsContent slug={slug} />
        </div>
    );
}