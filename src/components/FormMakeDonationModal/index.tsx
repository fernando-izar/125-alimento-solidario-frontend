import { useContext, useState } from "react";
import { DonationContext } from "../../contexts/DonationContext";
import { useForm, Controller } from "react-hook-form";
import { IDonation } from "../../contexts/DonationContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaDonation } from "../../validators/schemas";
import { Button } from "@material-ui/core";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import moment from "moment";

import { Container } from "./styles";
import { ButtonHeader } from "../ButtonHeader";

export const FormMakeDonationModal = () => {
  const { onSubmitMakeDonation } = useContext(DonationContext);

  const {
    register,
    handleSubmit,
    control,
    formState,
    formState: { errors },
  } = useForm<IDonation>({ resolver: yupResolver(schemaDonation) });

  //SELETOR DE DATA
  const newDate = new Date();
  const dateString = moment(newDate).format("DD/MM/YYYY");
  const [value, setValue] = useState<string | null>(dateString);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitMakeDonation)}>
        <h2>Quero Doar</h2>
        <TextField
          {...register("food")}
          label="Qual alimento você está doando"
          variant="standard"
          type="text"
          error={!!errors.food?.message}
          helperText={errors.food?.message}
        />
        
        <TextField
          {...register("quantity")}
          label="Qual a quantidade que você está doando?"
          variant="standard"
          color="warning"
          type="text"
          error={!!errors.quantity?.message}
          helperText={errors.quantity?.message}
        />
        
        {/* <TextField
          {...register("expiration")}
          label="Qual a validade do produto? (DD/MM/AAAA)"
          variant="standard"
          color="warning"
          type="text"
        />
        <p>{errors.expiration?.message}</p> */}

        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disablePast
            label="Qual a validade do produto?"
            inputFormat="DD/MM/YYYY"
            onChange={(value) => {
              setValue(value);
              console.log(value);
            }}
            value={value}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                color="warning"
                type="date"
                // InputLabelProps={{ shrink: true }}
                {...register("expiration")}
              />
            )}
          />
          <p>{errors.expiration?.message}</p>
        </LocalizationProvider> */}

        <Controller
          name="expiration"
          // defaultValue={dateString}
          control={control}
          render={({ field: { onChange, ...restField } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                disablePast
                label="Qual a validade do produto?"
                inputFormat="DD/MM/YYYY"
                onChange={(event) => {
                  onChange(event);
                  setValue(event);
                }}
                // value={value}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    color="warning"
                    type="date"
                    InputLabelProps={{ color: "primary" }}
                    {...register("expiration")}
                    error={!!errors.expiration?.message}
                    helperText={errors.expiration?.message}
                  />
                )}
                {...restField}
              />
              
            </LocalizationProvider>
          )}
        />

        <label htmlFor="classification">Classe</label>

        <select {...register("classification")} id="classification">
          <option value="cereais">Cereais</option>
          <option value="enlatados">Enlatados</option>
          <option value="hortifruti">Hortifruti</option>
          <option value="laticinios">Laticínios</option>
          <option value="padaria">Padaria</option>
        </select>
        <ButtonHeader variant="contained" size="large" type="submit">
          Confirmar Doação
        </ButtonHeader>
      </form>
    </Container>
  );
};
