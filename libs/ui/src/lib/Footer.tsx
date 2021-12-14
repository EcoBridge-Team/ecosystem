interface FooterProps {
  title: string
}

export default function Footer(props: FooterProps) {
  return (
    <footer
      className="bg-footer bg-center lg:bg-top z-20 bg-cover mt-10
               text-lg text-green-700 text-center
               bottom-0
               p-20"
    >
      <p className="mt-12">
        &copy; {new Date().getFullYear()} {props.title}
      </p>
    </footer>
  )
}
