/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@chakra-ui/react";

export const MeditationIcon = (props: any) => {
  return (
    <Icon viewBox="0 0 92 92" {...props}>
      <svg width="88" height="88" fill="none">
        <mask
          id="b"
          width="88"
          height="88"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="url(#a)" d="M0 0h88v88H0z" />
        </mask>
        <g mask="url(#b)">
          <path fill="#FF4900" d="M-3.59375-8.625h99.9062v110.688h-99.9062z" />
        </g>
        <defs>
          <pattern
            id="a"
            width="1"
            height="1"
            patternContentUnits="objectBoundingBox"
          >
            <use xlinkHref="#c" transform="scale(.00781)" />
          </pattern>
          <image
            xlinkHref="data:image/png;base64,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"
            id="c"
            width="128"
            height="128"
          />
        </defs>
      </svg>
    </Icon>
  );
};

export const MicroscopeIcon = (props: any) => {
  return (
    <Icon viewBox="0 0 92 92" {...props}>
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_203_237"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="88"
          height="88"
        >
          <rect width="88" height="88" fill="url(#pattern0_203_237)" />
        </mask>
        <g mask="url(#mask0_203_237)">
          <rect width="88" height="88" fill="#FF4900" />
        </g>
        <defs>
          <pattern
            id="pattern0_203_237"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_203_237" transform="scale(0.0078125)" />
          </pattern>
          <image
            id="image0_203_237"
            width="128"
            height="128"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </Icon>
  );
};

export const LightIcon = (props: any) => {
  return (
    <Icon viewBox="0 0 92 92" {...props}>
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_203_246"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="88"
          height="88"
        >
          <rect width="88" height="88" fill="url(#pattern0_203_246)" />
        </mask>
        <g mask="url(#mask0_203_246)">
          <rect
            x="-8.32434"
            y="-4.75684"
            width="99.8919"
            height="115.351"
            fill="#FF4900"
          />
        </g>
        <defs>
          <pattern
            id="pattern0_203_246"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_203_246" transform="scale(0.0078125)" />
          </pattern>
          <image
            id="image0_203_246"
            width="128"
            height="128"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACxQAAAsUBidZ/7wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABCqSURBVHic7Z15tFxFEYe/97K9hESWABFJCFvYRDYxEKKAKJthByGs6vGAGyoiyhGUIFtkUYEgENk3QUBZREQwIiCBQCASWQwGEiJBMEBIIEC2N/5RM+d1V997p+82d+6b+Z3T58286a6u213dt7u6qhpaF7sB84BXgF0K5qWNAjAdqFTTtIJ5KQydRTNQINY0Pq9VGBcFo5UFoA3aAtDyaAtAi6MtAC2OtgC0ONoC0OJoC0CLo4wCsAlwN3BP9XPR2Azh5S5g44J5aQlMoUeD91gKOnMNOi+noDPNoHN/CjqFoIwzwCDj847AtkUxAmwHjDa+r1IUI0lRRgG4TX3/akI6zxmf/5mQxrHqu+atjRwwFPiQnmn3HexZwRfrAlcCVwAfS1B+ILDQ4GMpLXym0GjcQk/DV4D9C+DhIMXDbwrgITXyfgWMByYCm2dM93L1/cOM6ftA16l5SostgJ8Bh2VMt2E4hJ7RsRjYKWP6JwJTgdMzpuuLDuCMKg8nZEx7LNJmtfY7KGP6DcFPsafIPISgN0J3fgU4La/KOvIiDGyIWN2sbvzvXWAvZNQ0Cn2BUciUOhxZ/K0DDECev6vK12JkQfkm8CLwL0Q/sKKBvI4F/gQMMf73NrA9MKeBfGSGbZAGNaX5PWDXHOscBOwNnAc8gb1jiJuWAU8BFwDjsDsma+yEO/IXAp/Ksc6GoBFCMBBZcN4OLCF5h9dLy5ERegTJtp5hCOv87TOso1DkJQQbAecDb5Ffp4elxYgeIe0OJ+id36s6v4YshWAUcD3yfo7qpJXATOBG4IfAwcAYZH2yOrAa8BFEEbQZMt0eApxaLTOjSqNeHbeRTCXdMp1fw3a4o3UxotP3wVBkv72c8A5ZgGj3DgbWyIDnNYADgUnAqxH1diMKqnU96Y5BFp8mjTcp9myjIdgWVwh8dPFfxp1BzHfz7cCeyKo/L/QBdkdmn7C1xmJER1GPj+dxO3+bXLhuQmghmF0nv1a71tISZIU+PDdOw7EWcDaydQzibTrR9gFzaNHOr2FrRB/wLPC5Onl/jDviLwE+mieDnlgV0Qh+gCsEi4AvhpTbHZkFpgJb5c9muTES8eOrAA8jwtNs2BjZIgbNBhchr482UqA/xUz1cXEk7sq+guwUBhTIVynQH7gMUcWeVTAvabAJ8A9cIfgL+WoTS40+yCgxG2yHQjlKhy7gJlwhmEq2WsRegQ7gatzGKvueuBO4EPe5/kC+29XS4ee4jXRhoRxli1Nxn+8q8j2N9ULhDACH45pTXQd8BWmoLDESUSNH4UVkx5E1zgZOUf/7PvCLHOoqDTbFXTHfQT7T4/5Eq5BNHcO+OdTfgRwemXUtQ1TCLYlVENNss0GeQhZPeeBe6nd+Ld2TEw99EecRs66XEGVSy+EC3FOwDXOs7yX8BeDfOfKxNvCaqu+aHOvLHcMQv7ingQnACI8yW2NPx93AfnkxCPRT9b0EnKySKSDLq2Xywm7Yx8zd+NlLroe08dPIq3LtvBiMg0nY0rwSmW7DbPU7EZ8+s8zVCeveEDiJ+jYFm6j6bgjIc6PKU2+x+Nlq3UlnrfNVfU8Tri4+AFEza9uEptgpXUL4VHpGQP5jVJ4F2BG7fDEa2zNnEuGq1i+oOicE5Dld5dk7hNYAbKFParc3GNe+4OsB+c4mvH0vSlBv5hiGjPhuXAafUnn7INa2Zp4vJ6hTd34tTccdkTsg7uRmviMCaB6l8tyFq4ncCDu+YFohGK/ozEPU4SaCVMrdyEK1qVzRNgbOwV7gnKry6Ad+hvi6iNGEn8FXqr8dChyNGJoE5RntUBWrpKC8/0SE49A69S4MoVsPjyo6X1K/n2b8Nh9p440S1NMw9EXej3p/24HbIYfGpB3U+XHNvhcR7MY9GNdEq17SdScRgn0UjedxXfZ2Qtq01OrjT1P/QaOwA27n1xr8SOp33krElmDXiDp2q+apZwj6LvIaieLJFx3ITGjS2D1G+dLg19gPqX3ro7Al9Rt6M8QCWHfW88A3EW8gX6xTLfNCAL1nEA1mDUFC8A7w8Rj1Ha3KXxujbCnQhb1oex8xyfbFFfiNsoGIPcFypOOPIp0lTp8qjRcQte2l1To0gl5Nk2PUMwh7BlsUUk9pYXoKV4jvS69P0xYRbXCZh9t71GJ1FMKTyeOPYtK/QZUPsyUsJfT0H7bHDkMXoijRU3EzjJIByHbX5G0m8XnbW9G4MkMeC8ds7JVzko4LGmW/yorBFLgMd4G4WQI6A7Ati/M8j2goRmA30IMpaB2uaMWdKkcC30VO5GYhrmnvVT//GfgOom/3xaEB/IyPUV7jQUUrDi9NiyOwHyptsIPLFb1nPMqMQBZl9XwJa9vFW4ENPOg+q8peFuM5gjBB0Ts8Jb26aESYOD0dpr2eRXsRLaiT/whkhB+H346gE5lVnqV+fB5ddz0Pp3p4XH3POrZSIbgVW6pHpqA1AFGHmvT2jMg/geAzigqisp5WTfp8vpa6cdXZJvTC7VVcXX4cbKDo3ZyCVtPA1HK9T7pZR28nH43I+xXcDl2CRN4KGlmbA+dWedTljomo5xGV90Dvp3HRib0Q1IdppYS5cp+ZkEYXoll7ALuxw2wOtkQCN5p5p+O3qBqJu637EIkxFATtuHp/ldekpm2mmdzChDQywX7IO+3tGOkxbEOKTmy9uu8OYA9k0TYFOSINmsYXEd7If1R5HyOeM8Yg7CDQFeR4OAgDCXYF60buJJxSfRZf/f5DBo2V2AqoTat8xemT2ciBU2z8N+ChfNJNBo0h6re7PerdgfD3tpnCtImfUvneIpkX8cdwbQ4+GZL3Zg9+u/E7JLpHlTNPLnWEVN80P6yyqPfxex7MBuFd4/PgBDR3pL6NwPvAL0N+03qBicDrHvVqvIasF0wcEpL3QuTdHYUO/FzddBsNjvjNF++G/RB1vnw4cCbxrE6eA35ifNcmWks9aGihXIAc7Mw20qPIDBUE06Z/Beksbq9GTLJq28d9CdbxT0OMNMYiZxSjqn83x24/n22oDkFrvuZOQXYZYeuRIPwPu08aijWwp6LfeZT5nioTJxB0J7b1b5oLJWp4wqC3lHgWTAdgP4tPSNk7VJk4p6axkbciqLY4qiFvB4i1sWe1uRnQNGn0J5kBaxyYHV4hYvrOAnkLwApk711DrtKMa8u/PAOay9T3vIM8mG20GNkJ5IZGqILfMT7nLQBvYM84SS6C0DDDvnWTbEEZB2YbLcq5roYYGb5OT2iX9ZAR5LMYrOFbwCewF4HvhORdhiwOax0/OkF9JgZim3vPJzp49GrI4q+WdklQn+lZFbbQLRW0R2y9oA96ERiUniTcxk8HmkhjWaPN2K8Iybcuwf4COtVbBGodRhyzskRoxCtAH9fWi/A114Pm9sAPQn67U30/g2R+fv2ROw+iaNdwEuFKIhNz6vyu28bnqLvpsTO2VIcpcGroRBQwtVj9YaNpHsFbsj645/RXJeB7sqIxk+B9fAfwnwg+V1Sf5RzqDzjtZzk2Ad9Nh9WwVbvTY5Ttj+i/xyHT5yzsBgqLMbwvbkdMwm/N0w8xNdPlw+wYx6h8s6q8jqvyHud42HQD60YCWfcKmAad3SQ3dToeu7Gvi8irbfUqyCnfHgTPHB2IbcGMgHKTIurRXsXf8H4aG+srOk8kpNOUmID9cMcnpLMm9nn9CsINMPvhRuMwD0duRKblidXP2tCklu4jfObYHPs1tQSJaJ4EevEbZYhSOmyD/XAPpKCl3dGvj8jbNyB/nDSZ6Clcj/6LEz4TwN8UrTieRaXAHHoebhnJw76egN1QszzKHEa8EDGz8ds+mubuFcTiOAnWwz7D6DUm4SZ0TKBzE9DYCtdkKygIRRD6I67XdwXQqE3fdyLmX74Lt7MUjfdJFvlbt83EBDSaHutjS/ki4q1yB+M6az5OMiPMfsgMNKaahpNMV9AX+Lvi6UXiPdcQbL/C5fQSf4Ag6FjAcaZM7Tv3NuksjLPCCMRmweTtlhjlT1RlS3kHsS/0nvk/uFZDQdDOJd1I3J9mwT64Zmw+Th1DcHcfSaKMlAo6JIo2uwrCtarMPMK3WwcjYdknkc1UOhLZSTxA+B2+Q3G1gT6Rz3SksEfSMlsGjMUeLUup70x5AO4Im4EtBF2I/76ZZ2n1f2ZAB19siiiTtHn5pdhmWkNxlUc+cQ+3QHZDZpmWCRt7HXaD3e9R5njChWAUrvu4TjMRv8So4IrDqnmCIo2Y6WnkuDes879V51k6gL+qckljJZYSw3BNrr/nUS5ICF7AdRuPSrMIPtTpi+y/fekswt2V+HQ+yCWWekHbFFE/G4nvYjfCMiSQVD0ECYFOVyCzzLKQ37cMoLtVSN5lyBpEh6nRybfzd8GNWu5TrtehE9Gzmw1hWvNEIUwIFmP7549AdOpaYxfkv6ddvGYjZtimxnI84V5APp04DHfV/wAtfKPYWvRcB1dLfyc4jp/GsdhC8Bzh+nPtVBpkTHKyyhO24h+F/d7vxu9wawhujOS5JD886jUYjRtw8RH89AOHIUGUzyTaGVMfRgWZWuk4RlGWS12Iw8h9+AW7HIQb/aOlL4vQ+AbutDqF7G7XGow9WzyOmHCZ6XHsUe0zC/kgqPMrwNcyot9roK+HrSBbpSxuAId4zq6hzpQxMRT3mLdC/BByLYPTcRtrHmIEmhYPB9AOSw9lUN/WiC2gpl2Yn15ZcAZuo31AsrDyJvQiLyqdlLKu8QRfL396SrqZoxmujQvCiYi9gDbFmkhP1NC46IMcKtWztHkWOZHrTlBHP+A8XPv/FcjOoylu+CgLdka8ivQouo3miBCqMQAxKNH8vgl8vkC+So3huKFaKsQ7b28UrsXlcwZ+8QbbiMBAJK5AM2+jjsXl73qac6YqJfrg2vl/QHOYTo3ADu1Wof2uzwWduHvqZrg162JsnqbSwrr9vLEh9vZqCcXenLU2toXxEqLvMWgjA2j376ML5OVLipdrCuQlERrhHp41tD/gzoVwEVx36ax6mlURFIVOxI5+SPX7fKKdN32wAAlqrePwrYEcJa8eUu7b9ISQWYoc/CRRILURE/Xs/5KkqaqOvgTfGhaWSunOVcZXAIhVTtbYEXvfvg7xrn55LVt2GoOyCkAe0+zvscO9vkq8U8Go4FFNi1JfRWrgMJIdENXwBmKKZqKCRPj+DMFmWx3Ab1PU2UYKaJv6IhazHYqHKQXwkBplfQW0kRHaAtDiaAtAi6MtAC2OtgC0ONoC0OJoC0CLoy0ALY6yCoC+RiXviyiCoE8I8zifyB1lFYA56rvvpYxZQtf5cgE8tCzGYathZ5H/hVQmVsONJrJXA+tvefTB7YBnCA8fnyXGYF+IXRPAUs6mZbQIqmEPxD9fP8N88rvYaR3cCCa1U8NSHgaVHTrOUKNTN2IW1kaBOAi5HrXRnf8GEr+w1CjzK8DEYMR9fDzuPTsLU9LW271HEe/h67AvxWyjCdCFmHKZIzVNNA4dteQ12v5+TQ8db2gldug4XxyJG4ruuIx4bCNHdAD34i7WJuMXdKoLCWC9UtG4n97zyuz1+CjBYV9fRiKMrBtQZjgy5c8JKDcLCfLYRokwErm9I2wVPxcJ3PgY8EpEvn9h3+fbRomwKsHBJXzTbfSiyxtbGXvhd7lzLT2JaBp7PVptUbMdEih6J2ATxOGjAryFvC6mAncgsX1aAv8H7HlOo8XJbSwAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </Icon>
  );
};