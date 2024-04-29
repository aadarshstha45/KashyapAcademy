import { SearchIcon } from "@chakra-ui/icons";
import {
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { debounce } from "lodash";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Controller } from "react-hook-form";
import { SearchInputProps } from "../Table/SearchInput";

function SearchInput({
  name,
  type,
  placeholder,
  isLoading,
  isControlled,
  value,
  control,
  variant,
  bg,
  onSearch = () => {},
  ...extra
}: SearchInputProps) {
  const [searchString, setSearchString] = useState("");
  const [isDebouncing, setIsDebouncing] = useState(false);

  const debouncedSearchFunction = useCallback(
    (value: string) => {
      onSearch(value);
      setIsDebouncing(false);
    },
    [onSearch]
  );

  const debouncedOnSearch = useMemo(() => {
    return debounce(debouncedSearchFunction, 500);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDebouncing(true);
    const value = e.target.value;
    setSearchString(value);
    debouncedOnSearch(value);
    console.log(value);
  };
  return isControlled ? (
    <Controller
      control={control}
      name={name}
      render={({ field: { value }, fieldState: { error } }) => {
        return (
          <FormControl id={name} isInvalid={!!error}>
            <InputGroup>
              <Input
                placeholder={placeholder}
                variant={variant}
                type={type}
                bg={bg}
                value={value}
                focusBorderColor="primary.200"
                onChange={(e) => {
                  debouncedSearchFunction(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <InputRightElement>
                <IconButton
                  type="submit"
                  border={"none"}
                  variant={"outline"}
                  bg={"transparent"}
                  aria-label="Search"
                  size={"sm"}
                  _hover={{ bg: "transparent" }}
                >
                  {isLoading ? <Spinner size={"sm"} /> : <SearchIcon />}
                </IconButton>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        );
      }}
    />
  ) : (
    <FormControl id={name}>
      <InputGroup>
        <Input
          placeholder={placeholder}
          variant={variant}
          type={type}
          bg={bg}
          value={value}
          focusBorderColor="primary.200"
          onChange={handleChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onSearch(searchString);
            }
          }}
          {...extra}
        />
        <InputRightElement>
          <IconButton
            type="submit"
            size={"sm"}
            border={"none"}
            aria-label="Search"
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
            icon={isDebouncing ? <Spinner size={"sm"} /> : <SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default SearchInput;
