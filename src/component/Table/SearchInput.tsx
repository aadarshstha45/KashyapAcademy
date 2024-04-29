/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Control, Controller } from "react-hook-form";
type SearchInputProps = {
  name: string;
  control: Control<any>;
  isControlled?: boolean;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  value?: string;
  onSearch?: (data: string) => void;
};

export const SearchInput = ({
  name,
  type,
  placeholder,
  isLoading,
  isControlled,
  value,
  control,
  onSearch = () => {},
  ...extra
}: SearchInputProps) => {
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
                w={{ base: "auto", sm: "250px" }}
                placeholder={placeholder}
                variant={"filled"}
                type={type}
                value={value}
                focusBorderColor="teal.400"
                onChange={(e) => debouncedSearchFunction(e.target.value)}
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
          w={{ base: "150px", sm: "250px" }}
          placeholder={placeholder}
          variant={"filled"}
          type={type}
          value={value}
          focusBorderColor="teal.400"
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
};
