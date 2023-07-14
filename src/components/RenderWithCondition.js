export default function RenderWithCondition({flag})
{
    return flag && <div>
       This is RenderWithCondition {String(flag)}
    </div>;
}