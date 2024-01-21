import { Button, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteAll } from "./components/reducer/reducer";

export function Delete() {
  const dispatch = useDispatch();

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Button variant="outlined" onClick={() => dispatch(deleteAll())}>
        CLEAR ALL
      </Button>
    </Container>
  );
}
