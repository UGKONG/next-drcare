export default function useServerSideProps(props: { [key: string]: any }) {
  return { props: props };
}
