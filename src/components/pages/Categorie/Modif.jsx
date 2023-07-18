import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import Aside from '../../fragments/Aside';
import Header from '../../fragments/Header';
import PageHeader from '../../fragments/PageHeader';

const EditCat = () => {
    const [data, setData] = useState({})
    const params = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        const data = async () => {
            try {

            } catch (error) {
                console.log('error');
            }
        };
        return () => {
            data();
        }
    }, []);

    const input = (e) => {
        const id = e.target.name;
        const value = e.target.value;

        setData({ ...data, [id]: value })
    }

    const edit = async (e) => {
        e.preventDefault();
        try {
            navigate('/cat')
        } catch (error) {
            console.log('eroor')
        }
    }

    const back = () => {
        return navigate(-1);
    }

    const home = () => {
        return navigate('/cat');
    }

    return (
        <div>
            <div>
                <Helmet>
                    <title>Catégorie | Modification</title>
                </Helmet>
            </div>
            <Header />
            <div className='d-flex flex-column flex-root'>
                <div className='d-flex flex-row flex-column-fluid page'>
                    <Aside />
                    <div className='d-flex flex-column flex-row-fluid wrapper' id='kt_wrapper'>
                        <PageHeader />
                        <div>
                            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                                <div className="subheader py-2 py-lg-4 subheader-transparent" id="kt_subheader">
                                    <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                                        <div className="d-flex align-items-center flex-wrap mr-2">
                                            <h5 className="text-dark font-weight-bold mt-2 mb-2 mr-5"></h5>
                                            <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                                            <div className="d-flex align-items-center" id="kt_subheader_search">
                                                <div className="row">
                                                    <a onClick={() => home}>Catégorie | &nbsp;</a>
                                                    <span className="text-dark-50 font-weight-bold" id="kt_subheader_total">Modifier</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className='col-md-3'>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card card-custom">
                                                <div className="card-header">
                                                    <h3 className="card-title">
                                                        Modifier une catégorie
                                                    </h3>
                                                </div>
                                                <form onSubmit={edit} >
                                                    <div className="card-body">
                                                        <div className="form-group">
                                                            <input type="hidden" className="form-control" name="id" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Titre de la catégorie<span className="text-danger">*</span></label>
                                                            <input type="text" value={data.nom} className="form-control" name="libelle" required onChange={input} />
                                                        </div>
                                                    </div>
                                                    <div className="card-footer">
                                                        <button type="submit" className="btn btn-primary mr-2">Valider</button>
                                                        <a onClick={back} className="btn btn-secondary">Retour</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default EditCat;