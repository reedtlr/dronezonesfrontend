import React, { useState, useEffect } from "react";
import cx from 'clsx';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import Head from "next/head";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import {
    Avatar,
    Button,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    FormControl,
    FormGroup,
    Typography,
    TextField,
    Input,
    Grid,
    FormLabel,
    Link,
} from "@material-ui/core";
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        borderRadius: 0,
        borderBottom: "2px solid #f4a261"

    },
    content: {
        padding: 24,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '20%',
        marginRight: '20%',
    },
    modalStyle: {
        backgroundColor: theme.palette.background.paper,
        border: '3px solid #2A9D8F',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(5, 5, 5),
        outline: "none"
    },
    link1: {
        color: '#32CD32',
        textDecoration: 'none',

    },
    link2: {
        color: '#FF4500',
        textDecoration: 'none',
    },
    link3: {
        color: '#9400D3',
        textDecoration: 'none',
    },
}));





const metaDataCard = () => {
    const shadowStyles = useLightTopShadowStyles();
    const cardStyles = useStyles();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modalHeader, setModalHeader] = useState(null);
    const [modalText, setModalText] = useState(null);
    const [modalLink, setModalLink] = useState(null);


    const metaDataJson = {
        "media": {
            "@ref": "/Users/admin/Downloads/3D Viz 135950 Dekunu.mp4",
            "track": [
                {
                    "@type": "General",
                    "VideoCount": "1",
                    "FileExtension": "mp4",
                    "Format": "MPEG-4",
                    "Format_Profile": "Base Media",
                    "CodecID": "isom",
                    "CodecID_Compatible": "isom/iso2/avc1/mp41",
                    "FileSize": "33771176",
                    "Duration": "43.440",
                    "OverallBitRate": "6219369",
                    "FrameRate": "18.669",
                    "FrameCount": "811",
                    "StreamSize": "9204",
                    "HeaderSize": "40",
                    "DataSize": "33761980",
                    "FooterSize": "9156",
                    "IsStreamable": "No",
                    "File_Modified_Date": "UTC 2021-02-23 01:20:41",
                    "File_Modified_Date_Local": "2021-02-22 20:20:41",
                    "Encoded_Application": "Lavf58.64.100"
                },
                {
                    "@type": "Video",
                    "StreamOrder": "0",
                    "ID": "1",
                    "Format": "AVC",
                    "Format_Profile": "Baseline",
                    "Format_Level": "6.1",
                    "Format_Settings_CABAC": "No",
                    "Format_Settings_RefFrames": "1",
                    "CodecID": "avc1",
                    "Duration": "43.440",
                    "BitRate": "6217674",
                    "Width": "1920",
                    "Height": "968",
                    "Stored_Height": "976",
                    "Sampled_Width": "1920",
                    "Sampled_Height": "968",
                    "PixelAspectRatio": "1.000",
                    "DisplayAspectRatio": "1.983",
                    "Rotation": "0.000",
                    "FrameRate_Mode": "VFR",
                    "FrameRate": "18.669",
                    "FrameCount": "811",
                    "ColorSpace": "YUV",
                    "ChromaSubsampling": "4:2:0",
                    "BitDepth": "8",
                    "ScanType": "Progressive",
                    "StreamSize": "33761972",
                    "Encoded_Library": "x264 - core 161 r3027 4121277",
                    "Encoded_Library_Name": "x264",
                    "Encoded_Library_Version": "core 161 r3027 4121277",
                    "Encoded_Library_Settings": "cabac=0 / ref=1 / deblock=0:0:0 / analyse=0:0 / me=dia / subme=0 / psy=1 / psy_rd=1.00:0.00 / mixed_ref=0 / me_range=16 / chroma_me=1 / trellis=0 / 8x8dct=0 / cqm=0 / deadzone=21,11 / fast_pskip=1 / chroma_qp_offset=0 / threads=12 / lookahead_threads=2 / sliced_threads=0 / nr=0 / decimate=1 / interlaced=0 / bluray_compat=0 / constrained_intra=0 / bframes=0 / weightp=0 / keyint=250 / keyint_min=25 / scenecut=0 / intra_refresh=0 / rc=crf / mbtree=0 / crf=24.0 / qcomp=0.60 / qpmin=0 / qpmax=69 / qpstep=4 / ip_ratio=1.40 / aq=0",
                    "colour_description_present": "Yes",
                    "colour_description_present_Source": "Stream",
                    "colour_range": "Limited",
                    "colour_range_Source": "Stream",
                    "colour_primaries_Source": "Stream",
                    "transfer_characteristics_Source": "Stream",
                    "matrix_coefficients": "BT.470 System B/G",
                    "matrix_coefficients_Source": "Stream",
                    "extra": {
                        "CodecConfigurationBox": "avcC"
                    }
                }
            ]
        }
    }

    const metaDataKeyValues = Object.entries(metaDataJson).map(([key, value]) => {
        return (value)
    })

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Head>
                <title>DroneZones: MetaData</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Card className={cx(cardStyles.root, shadowStyles.root)}>
                <BrandCardHeader image={'headers/metadata.png'} extra={'About: MetaData'} />
                <CardContent className={cardStyles.content}>
                    <Grid
                        container
                        spacing={3}
                        alignItems="center"
                        style={{ minHeight: "60vh" }}
                    >
                        <Grid item sm={8}>
                            <Card>
                                <CardContent style={{
                                    backgroundColor: '#000000', color: '#ffffff', border: '4px solid #2A9D8F', fontSize: '1em'
                                }}>
                                    {
                                        metaDataKeyValues.map((entry) => {
                                            console.log(entry)
                                            console.log('entry trackkkk', entry.track)
                                            return (
                                                <div>
                                                    <Typography>{`"media": {`}</Typography>
                                                    <Typography>{`"{@ref": "${entry["@ref"]}",`}</Typography>
                                                    <Typography>{`"track": [`}</Typography>
                                                    <Typography>{`{`}</Typography>
                                                    <Typography>{`"@type": "${entry.track[0]["@type"]}",`}</Typography>
                                                    <Typography>{`"VideoCount": "${entry.track[0]["VideoCount"]}",`}</Typography>
                                                    <Typography>
                                                        <Link className={classes.link1} onClick={() => {
                                                            setModalHeader('File Extensions');
                                                            setModalText("A filename extension, file extension or file type is an identifier specified as a suffix to the name of a computer file. The extension indicates a characteristic of the file contents or its intended use. A filename extension is typically delimited from the filename with a full stop (period), but in some systems it is separated with spaces.");
                                                            setModalLink("Filename_extension");
                                                            handleOpen()
                                                        }}>
                                                            {`"FileExtension": "${entry.track[0]["FileExtension"]}",`}
                                                        </Link>
                                                    </Typography>
                                                    <Typography>
                                                        <Link className={classes.link2} onClick={() => {
                                                            setModalHeader('File Format');
                                                            setModalText("A file format is a standard way that information is encoded for storage in a computer file. It specifies how bits are used to encode information in a digital storage medium. File formats may be either proprietary or free and may be either unpublished or open..");
                                                            setModalLink("File_format");
                                                            handleOpen()
                                                        }}>
                                                            {`"Format": "${entry.track[0]["Format"]}",`}
                                                        </Link>
                                                    </Typography>
                                                    <Typography>{`"Format_Profile": "${entry.track[0]["Format_Profile"]}",`}</Typography>
                                                    <Typography>
                                                        <Link className={classes.link3} onClick={() => {
                                                            setModalHeader('CODEC');
                                                            setModalText("A codec is a device or computer program which encodes or decodes a digital data stream or signal. Codec is a portmanteau of coder-decoder. A coder or encoder encodes a data stream or a signal for transmission or storage, possibly in encrypted form, and the decoder function reverses the encoding for playback or editing.");
                                                            setModalLink("Codec");
                                                            handleOpen()
                                                        }}>
                                                            {`"CodecID": "${entry.track[0]["CodecID"]}",`}
                                                        </Link>
                                                    </Typography>
                                                    <Typography>{`"CodecID_Compatible": "${entry.track[0]["CodecID_Compatible"]}",`}</Typography>
                                                    <Typography>
                                                        <Link className={classes.link1} onClick={() => {
                                                            setModalHeader('File Size');
                                                            setModalText("File size is a measure of how much data a computer file contains or, alternately, how much storage it consumes. Typically, file size is expressed in units of measurement based on the byte. By convention, file size units use either a metric prefix (as in megabyte and gigabyte) or a binary prefix (as in mebibyte and gibibyte).");
                                                            setModalLink("File_size");
                                                            handleOpen()
                                                        }}>
                                                            {`"FileSize": "${entry.track[0]["FileSize"]}",`}
                                                        </Link>
                                                    </Typography>
                                                    <Typography>
                                                        <Link className={classes.link2} onClick={() => {
                                                            setModalHeader('Duration');
                                                            setModalText("The duration property returns the length of the current audio/video, in seconds.");
                                                            setModalLink("Duration");
                                                            handleOpen()
                                                        }}>
                                                            {`"Duration": "${entry.track[0]["Duration"]}",`}
                                                        </Link>
                                                    </Typography>
                                                    <Typography>
                                                        <Link className={classes.link3} onClick={() => {
                                                            setModalHeader('Bit Rate');
                                                            setModalText("Bit Rate (bitrate or as a variable R) is the number of bits that are conveyed or processed per unit of time. The bit rate is expressed in the unit bit per second unit (symbol: bit/s), often in conjunction with an SI prefix such as kilo (1 kbit/s = 1,000 bit/s), mega (1 Mbit/s = 1,000 kbit/s), giga (1 Gbit/s = 1,000 Mbit/s) or tera (1 Tbit/s = 1,000 Gbit/s). The non-standard abbreviation bps is often used to replace the standard symbol bit/s, so that, for example, 1 Mbps is used to mean one million bits per second.");
                                                            setModalLink("Bit_rate");
                                                            handleOpen()
                                                        }}>
                                                            {`"OverallBitRate": "${entry.track[0]["OverallBitRate"]}",`}
                                                        </Link>
                                                    </Typography>
                                                    <Typography>
                                                        <Link className={classes.link1} onClick={() => {
                                                            setModalHeader('FrameRate');
                                                            setModalText("Frame rate (expressed in frames per second or FPS) is the frequency (rate) at which consecutive images called frames appear on a display. The term applies equally to film and video cameras, computer graphics, and motion capture systems. Frame rate may also be called the frame frequency, and be expressed in hertz.");
                                                            setModalLink("Frame_rate");
                                                            handleOpen()
                                                        }}>
                                                            {`"FrameRate": "${entry.track[0]["FrameRate"]}",`}
                                                        </Link>
                                                    </Typography>
                                                    <Typography>
                                                        <Link className={classes.link2} onClick={() => {
                                                            setModalHeader('Frame Count');
                                                            setModalText("A quantity of frames that are counted in film, video, and audio per second. Frame count should not be confused with frame rate or Frame Speed, though these words are sometimes used interchangeably. Frame count actually has nothing to do with speed. It only pertains to how many unique frame numbers exist per unit of running time (not necessarily real time) of video, film, or audio. Drop Frame Time Code is a unique frame counting method that exists to keep frame numbers aligned to the reality that in NTSC color video the Frame Speed is actually only 29.97 frames per second. This way the time code numbers stay in agreement with real running time.");
                                                            setModalLink("Frame_rate");
                                                            handleOpen()
                                                        }}>
                                                            {`"FrameCount": "${entry.track[0]["FrameCount"]}",`}
                                                        </Link>
                                                    </Typography>
                                                    <Typography>{`"StreamSize": "${entry.track[0]["StreamSize"]}",`}</Typography>
                                                    <Typography>{`"HeaderSize": "${entry.track[0]["HeaderSize"]}",`}</Typography>
                                                    <Typography>{`"DataSize": "${entry.track[0]["DataSize"]}",`}</Typography>
                                                    <Typography>{`"FooterSize": "${entry.track[0]["FooterSize"]}",`}</Typography>
                                                    <Typography>{`"IsStreamable": "${entry.track[0]["IsStreamable"]}",`}</Typography>
                                                    <Typography>{`"File_Modified_Date": "${entry.track[0]["File_Modified_Date"]}",`}</Typography>
                                                    <Typography>{`"File_Modified_Date_Local": "${entry.track[0]["File_Modified_Date_Local"]}",`}</Typography>
                                                    <Typography>{`"Encoded_Application": "${entry.track[0]["Encoded_Application"]}",`}</Typography>
                                                </div>
                                            )
                                        })
                                    }
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.modalStyle}>
                        <h1 id="transition-modal-title">{modalHeader}</h1>
                        <h2 id="transition-modal-text">{modalText}</h2>
                        <Link target="_blank" href={`https://en.wikipedia.org/wiki/${modalLink}`}>Click Here for More Info</Link>

                    </div>
                </Fade>
            </Modal>
        </div >
    );
};
export default metaDataCard;