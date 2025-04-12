export function Button({ children, asChild = false, ...props }) {
  const Comp = asChild ? 'span' : 'button';
  return <Comp className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white" {...props}>{children}</Comp>;
}