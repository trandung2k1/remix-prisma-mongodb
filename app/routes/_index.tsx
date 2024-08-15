import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { requireUserId } from '~/utils/auth.server';

export const meta: MetaFunction = () => {
    return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};
export const loader: LoaderFunction = async ({ request }) => {
    await requireUserId(request);
    return null;
};
export default function Index() {
    return (
        <div className="h-screen bg-slate-700 flex justify-center items-center">
            <h2 className="text-blue-600 font-extrabold text-5xl">TailwindCSS Is Working!</h2>
            <form action="/logout" method="post">
                <button
                    type="submit"
                    className="rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
                >
                    Sign Out
                </button>
            </form>
        </div>
    );
}
