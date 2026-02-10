

import WhitepapersDetails from "./whitepapers-details";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    return (
        <div className="pt-20">
            <WhitepapersDetails slug={slug} />
        </div>
    );
}